export const cleanMarkdownContent = (content: string): string => {
  return content
    // Remove markdown headers
    .replace(/^#{1,6}\s/gm, '')
    // Remove markdown asterisks for bold/italic
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    // Remove code block markers but keep the content
    .replace(/```[\w]*\n([\s\S]*?)\n```/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    // Remove markdown list markers
    .replace(/^\s*[-*+]\s/gm, '• ')
    .replace(/^\s*\d+\.\s/gm, '• ')
    // Clean up line breaks (remove excessive newlines)
    .replace(/\n{3,}/g, '\n\n')
    // Remove other markdown symbols
    .replace(/[_~]/g, '')
    .trim();
};
