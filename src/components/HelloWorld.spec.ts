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
          data-v-e17ea971=""
        >
          Name
        </h1>
        <div
          class="card"
          data-v-e17ea971=""
        >
          <button
            data-v-e17ea971=""
            type="button"
          >
            count is 0
          </button>
          <p
            data-v-e17ea971=""
          >
             Edit 
            <code
              data-v-e17ea971=""
            >
              components/HelloWorld.vue
            </code>
             to test HMR 
          </p>
        </div>
        <p
          data-v-e17ea971=""
        >
           Check out 
          <a
            data-v-e17ea971=""
            href="https://vuejs.org/guide/quick-start.html#local"
            target="_blank"
          >
            create-vue
          </a>
          , the official Vue + Vite starter 
        </p>
        <p
          data-v-e17ea971=""
        >
           Install 
          <a
            data-v-e17ea971=""
            href="https://github.com/vuejs/language-tools"
            target="_blank"
          >
            Volar
          </a>
           in your IDE for a better DX 
        </p>
        <p
          class="read-the-docs"
          data-v-e17ea971=""
        >
          Click on the Vite and Vue logos to learn more
        </p>
        
      </div>
    `);
  });
});
