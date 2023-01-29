export const formatDate = (dateString?: string) => {
  if (dateString) {
    const date = new Date(dateString);
    return `${date.toLocaleDateString('es-ES', {
      month: 'long',
      day: 'numeric',
    })}, ${date.getFullYear()}`;
  }
};

export const firstLetterUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
