import colors from "../styles/colors";

const conditionalCellStyles = [
    {
        when: (row) => row.Estado === 'Finalizado',
            style: { backgroundColor: colors.finalizado},
    },
    {
        when: (row) => row.Estado === 'En curso',
            style: { backgroundColor: colors.enCurso},
        },
  ];

  export default conditionalCellStyles;