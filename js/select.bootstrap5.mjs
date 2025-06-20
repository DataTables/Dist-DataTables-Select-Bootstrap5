/*! Bootstrap 5 styling wrapper for Select
 * © SpryMedia Ltd - datatables.net/license
 */

import jQuery from 'jquery';
import DataTable from 'datatables.net-bs5';
import select from 'datatables.net-select';

// Allow reassignment of the $ variable
let $ = jQuery;


DataTable.select.classes.checkbox = 'form-check-input dt-select-checkbox';


export default DataTable;
