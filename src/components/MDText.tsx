import { marked } from "marked";
import styled from "styled-components";

export default function MDText({ text }: { text: string }) {
  return (
    <ParseToHtml
      dangerouslySetInnerHTML={{
        __html: marked.parse(text, {
          breaks: true,
        }),
      }}
    />
  );
}

const ParseToHtml = styled.span`
  * {
    /* font-weight: normal; */
    word-break: break-word;
    overflow-wrap: break-word;
  }

  a {
    text-decoration: underline;
  }

  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: 14px;
    /* line-height: normal; */
  }
  .parse-to-html {
    white-space: pre-line;
  }
  /* ============= table style =================== */
  table {
    border-collapse: collapse;
    border: none;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    padding: 3px 0;
    font-size: 14px;
    color: var(--foreground-900);

    ::-webkit-scrollbar {
      height: 4px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc8c8;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #777;
    }
    thead {
      background-color: rgb(255, 255, 255, 0.2);
    }
    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      white-space: pre-wrap;
      font-size: 13px;
    }
    th {
      font-weight: bold;
    }
    tr {
      background-color: #fff;
    }
    /* Style table rows */
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  /* =============== pre and code tag style ============= */
  pre {
    color: var(--foreground-900);
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
    line-height: 1.2;
  }
  code {
    white-space: normal;
  }

  /* ============= list style =================== */
  ul {
    list-style-type: disc;
    padding-inline-start: 20px;
    list-style-type: disc;
    font-size: inherit;
    font-size: inherit;

    li {
      padding: 3px 0;
    }
  }

  li {
    font-size: inherit;
  }

  ol {
    list-style-type: decimal;
    padding-inline-start: 20px;
    font-size: 14px;

    li {
      padding: 3px 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    max-height: 250px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  /* ========================================== */
  blockquote p {
    border-left: 3px solid rgb(160, 170, 191);
    padding-left: 10px;
    margin: 5px 0;
  }

  a {
    color: hsl(var(--primary));
  }
`;
