import { Directive, Input } from '@angular/core';

export interface ColumnItem<T> {
  columnDef: string;
  header: string;
  cell:(item: T) => string
}

@Directive()
export abstract class BaseTableComponent<T> {
  displayedColumns: string[] = []
  // @ts-ignore
  private _columns: ColumnItem<T>[]
  @Input() set columns(inputColumns: ColumnItem<T>[]) {
    this._columns = inputColumns
    this.displayedColumns = inputColumns.map(c => c.columnDef);
  }

  get columns(): ColumnItem<T>[] {
    return this._columns
  }
  // @ts-ignore
  @Input() dataSource;

}
