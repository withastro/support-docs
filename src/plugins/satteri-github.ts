import { defineMdastPlugin, type MdastPluginDefinition } from "satteri";

export function satteriGithubPlugin(): MdastPluginDefinition {
	const processedParents = new WeakSet<object>();

	return defineMdastPlugin({
		name: "satteri-github",

		text(node, ctx) {
			const parent = ctx.parent(node);

			if (!parent || !("children" in parent) || processedParents.has(parent)) {
				return;
			}

			if (parent.type === "link") {
				return;
			}

			processedParents.add(parent);

			const children = [...parent.children];
			const nextChildren: typeof children = [];
			let changedChildren = false;

			for (let index = 0; index < children.length; index += 1) {
				const child = children[index];
				if (!child) continue;

				if (child.type !== "text" || typeof child.value !== "string") {
					nextChildren.push(child);
					continue;
				}

				const parsed = parseMentions(child.value);
				if (!parsed) {
					nextChildren.push(child);
					continue;
				}

				changedChildren = true;
				for (const parsedChild of parsed) {
					nextChildren.push(parsedChild as unknown as (typeof children)[number]);
				}
			}

			if (changedChildren) {
				ctx.setProperty(parent, "children", nextChildren);
			}
		},
	});
}

function parseMentions(value: string) {
	const regex = /(?<![\w`])@([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?)(?![\w`])/g;
	const matches = [...value.matchAll(regex)];

	if (matches.length === 0) return undefined;

	const result: any[] = [];
	let lastIndex = 0;

	for (const match of matches) {
		const matchIndex = match.index;
		if (matchIndex === undefined) continue;

		const username = match[1];

		if (matchIndex > lastIndex) {
			result.push({
				type: "text",
				value: value.slice(lastIndex, matchIndex),
			});
		}

		result.push({
			type: "link",
			url: `https://github.com/${username}`,
			children: [
				{
					type: "strong",
					children: [
						{
							type: "text",
							value: match[0],
						}
					]
				}
			],
		});

		lastIndex = matchIndex + match[0].length;
	}

	if (lastIndex < value.length) {
		result.push({
			type: "text",
			value: value.slice(lastIndex),
		});
	}

	return result;
}
