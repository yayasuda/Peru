import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdownFilePath }) => {
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    fetch(markdownFilePath)
    .then((response) => response.text())
    .then((text) => setMarkdown(text))
    .catch((err) => console.error(err));
  }, [markdownFilePath]);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownRenderer;
