import HelloWorld from "./HelloWorld.vue";
import { render } from "@testing-library/vue";

describe("<HelloWorld />", () => {
  it("renders the component", () => {
    // act
    const { container } = render(HelloWorld, { props: { msg: "Name" } });

    // assert
    expect(container).toMatchInlineSnapshot(`
      <div>
        
        <h1
          class="text-3xl font-bold underline"
        >
          Hello world!
        </h1>
        <h2>
          Name
        </h2>
        <div>
          <button
            type="button"
          >
            count is 0
          </button>
          <p>
             Edit 
            <code>
              components/HelloWorld.vue
            </code>
             to test HMR 
          </p>
        </div>
        <p>
           Check out 
          <a
            href="https://vuejs.org/guide/quick-start.html#local"
            target="_blank"
          >
            create-vue
          </a>
          , the official Vue + Vite starter 
        </p>
        <p>
           Install 
          <a
            href="https://github.com/vuejs/language-tools"
            target="_blank"
          >
            Volar
          </a>
           in your IDE for a better DX 
        </p>
        
      </div>
    `);
  });
});
