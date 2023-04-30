# Being Not Thinking

Michaela and Patrick's travel blog.

## Authoring a new post

1. Write your new post in a `.mdx` file. Be sure to add metadata for your post at the top of the file like so:
    ```ts
    export const title = "An interesting post";
    export const author = "Zelda";
    // These tags can be anything you like. They are only used to sort posts. They're not required.
    export const tags = ["Interesting"];
    // This will be used as part of your post's URL
    export const id = "an-interesting-post";

    # My Post

    ...
    ```
2. Once you're ready to publish your post, place it in the `posts` folder.
3. Update the `posts/index.tsx` file to include your new post in the `allPosts` list:
    ```ts
    import * as AnInterestingPost from "./an-interesting-post.mdx";

    // Posts at the top of the list will appear first on the website.
    export const allPosts: PostMetadata[] = [
    {
        postId: AnInterestingPost.id,
        // This isn't a field you need to define in your post. It's a generated function that allows us to render the post.
        mdx: AnInterestingPost.default,
        title: AnInterestingPost.title,
        tags: AnInterestingPost.tags,
    },
    // older posts...
    ```
4. Then, push your update to the GitHub repository. Your new post will appear after the deploy script finishes its task.

All posts will appear on the home page. Only posts tagged with "Travel" will appear in the travel page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
