export const truncate = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
  };
  