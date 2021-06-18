This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## What is this for?

When using `@headlessui/react` v1.2.0, when using the `Dialog` component, there is a bug that breaks subsequent dialogs after having opened one, then navigating with a `<Link>` and then opening another.

Reproduction steps:

1. open dialog on homepage
2. navigate to page 2 with the `<Link>`
3. open dialog on page2
4. it should error out

Observation: the `headlessui-portal-root` is gone after the page changes

## Related

https://github.com/tailwindlabs/headlessui/issues/505