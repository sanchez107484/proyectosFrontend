import colors from "../styles/colors";

const conditionalCellStyles = [
    {
        when: (row) => row?.Estado === 'En curso',
            style: { backgroundColor: colors.enCurso},
    },
    {
        when: (row) => row.Estado === 'Finalizado',
            style: { backgroundColor: colors.finalizado},
    },
  ];

  export default conditionalCellStyles;