import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview');

  return (
    <main>
      <h2>Markdown Preview app</h2>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
