function isIsoDate(str: string) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString() === str; // valid date
  }


  export const formatDate = (value: string) => {
    if (isIsoDate(value)) {
      return new Date(value).toLocaleDateString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        // minute: "2-digit",
        day: "2-digit",
      });
    }
    return "Invalid Date";
  };