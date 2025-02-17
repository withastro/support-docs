---
title: How to ask for Support
sidebar:
  label: Asking for Support
---

Our maintainers, support patrol and wonderful fellow community members are happy to help you when you need help! Help *us* help *you* with the following tips.

## Before Asking for Help

- **Check the documentation**: Before posting your support question, we encourage you to consult the [Astro documentation][docs]. We include helpful [guides & recipes](https://docs.astro.build/en/recipes/), as well as [complete reference for errors](https://docs.astro.build/en/reference/error-reference/). You can even run the `/docs` command to search the docs (privately) right in Discord!
- **Search the Discord**: If you have a question, it may have already been asked and answered on the [Astro Discord server][discord]. You can use the global search bar in the top right to search the entire server, or use the search bar in the `#support` channel to search for support posts directly.
- **Search for existing issues**: If you already suspect your issue to be a bug, search existing [GitHub issues](https://github.com/withastro/astro/issues) to see if one already exists. Otherwise, you can create a new issue to report your bug. If you want help confirming it's a bug, or creating a reproduction, post to the `#support` channel in the [Astro Discord server][discord].

## Where to ask

- **`#support`**: We actively monitor the support channel in the [Astro Discord server][discord]. This is by far the best place to ask.
- **`#support-ai`**: We have an AI support channel powered by [Kapa.ai](https://www.kapa.ai/). Answers here may not always be accurate, but it can be a good starting point when debugging issues with Astro. This channel isn't heavily monitored, so if you need further assistance, please follow up in `#support`.
- **Stack Overflow**: We do monitor Stack Overflow for Astro questions, and try our best to answer. Stack Overflow is great, since questions remain public and indexed by search engines, but it doesn't allow for longer conversation in the case of more complex issues.
- **Support Squid**: A support forum for Astro-related topics, made by community members. If you do not use Discord, this is another platform that is actively monitored.

## Where **NOT** to ask

- **Twitter/X/Bluesky**: Some of our community members are active on these social platforms, but we don't actively monitor for support questions.
- **GitHub**: Astro uses GitHub issues to track bugs, not support requests. Please join our [Discord server][discord] to ask for help.

## Providing Context

:::[caution]
Please avoid using screenshots of code, as they can be hard to read, and we may need to copy your code to create a reproduction.
:::

When asking for support, providing helpful context is important to equip others with the information they need to assist you. Examples of context that can assist support squad include:

- **Errors**: If your issue includes an error, please include the error message in its entirety.
- **Reproductions**: If possible, create a minimal reproducible example, which could be a GitHub repository, StackBlitz, IDX, CodeSandbox, or Gitpod link. A guide can be found in the Astro docs: [Creating a minimal reproduction](https://docs.astro.build/en/guides/troubleshooting/#creating-minimal-reproductions)
- **Code snippets**: If a reproduction isn't possible, provide code and config files related to the issue you're having. In Discord, code snippets can be created using a pair of 3 backticks (\`\`\`) surrounding your code. You can add optional syntax highlighting by adding a language after the first line of backticks (Discord doesn't support `astro`, so `tsx` is recommended for Astro code).
	``````md
	```tsx
  ---
  interface Props {
    name: string;
  }
  
  const { name } = Astro.props;
  ---

  <h1>Hello, {name}!</h1>
	```
	``````
- **Environment Information** - You can run `npx astro info` in your project's directory to generate helpful info about your project & environment.
- **Tags** - The `#support` forum provides tags for the various topics we receive support questions on. Some community members use these tags to filter for posts on subjects they have experience with. Using the correct tags lets others help you better!

## Etiquette

- **Conduct**: Astro strives to maintain a healthy and positive community. We expect members to follow our rules (see `#rules` in Discord) and [CODE OF CONDUCT](https://github.com/withastro/.github/blob/main/CODE_OF_CONDUCT.md)
- **Mentioning/Pinging Individuals**: If it doesn't matter WHO answers your question, then don't ask an individual member! This can discourage others, who may be available to help, from responding because they think you're having a conversation. Do not assume that an individual is available, and keep your questions and conversations open and inviting!

[docs]: https://docs.astro.build/en/getting-started/
[discord]: https://astro.build/chat
