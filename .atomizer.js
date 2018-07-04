module.exports = {
    'breakPoints': {
        'sm': '@media(min-width:576px)',
        'md': '@media(min-width:768px)',
        'lg': '@media(min-width:992px)',
        'xl': '@media(min-width:1200px)',

        'smUp': '@media(min-width:576px)',
        'mdUp': '@media(min-width:768px)',
        'lgUp': '@media(min-width:992px)',
        'xlUp': '@media(min-width:1200px)',

        'xsDown': '@media(max-width:575.98px)',
        'smDown': '@media(max-width:767.98px)',
        'mdDown': '@media(max-width:991.98px)',
        'lgDown': '@media(max-width:1199.98px)',

        'xsOnly': '@media (max-width: 575.98px)',
        'smOnly': '@media (min-width: 576px) and (max-width: 767.98px)',
        'mdOnly': '@media (min-width: 768px) and (max-width: 991.98px)',
        'lgOnly': '@media (min-width: 992px) and (max-width: 1199.98px)',
        'xlOnly': '@media (min-width: 1200px)',
    },
    'custom': {
        // '$white':    '#fff',  // no need
        '$gray1': '#f8f9fa',
        '$gray2': '#e9ecef',
        '$gray3': '#dee2e6',
        '$gray4': '#ced4da',
        '$gray5': '#adb5bd',
        '$gray6': '#6c757d',
        '$gray7': '#495057',
        '$gray8': '#343a40',
        '$gray9': '#212529',
        // '$black':    '#000',  // no need

        '$blue':    '#007bff',
        '$indigo':  '#6610f2',
        '$purple':  '#6f42c1',
        '$pink':    '#e83e8c',
        '$red':     '#dc3545',
        '$orange':  '#fd7e14',
        '$yellow':  '#ffc107',
        '$green':   '#28a745',
        '$teal':    '#20c997',
        '$cyan':    '#17a2b8',

        '$1':  '0.25rem',
        '$2':  '0.5rem',
        '$3':  '0.75rem',
        '$4':  '1rem',
        '$5':  '1.25rem',
        '$6':  '1.5rem',
        '$7':  '1.75rem',
        '$8':  '2rem',
    },
    'classNames': [ 'D(n)--sm' ],
};