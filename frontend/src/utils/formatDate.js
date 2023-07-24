export const formatDate = (date) => {
    let newDate = new Date(date);

    var options = { year: 'numeric', month: 'short', day: 'numeric' };

    return newDate.toLocaleString('es-ES', options);
};
