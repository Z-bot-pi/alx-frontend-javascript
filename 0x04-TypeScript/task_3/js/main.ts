/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and get a new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Update and delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
