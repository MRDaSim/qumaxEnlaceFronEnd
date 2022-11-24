export class ProducContb {
    nombre: string;
    Tipo: string;
    Codigo: string;
    CodigoOem: string;
    CostoInterno: number;
    CodigoBarras: string;
    Descripcion: string;
    Precio: number;
    Iva: number;
    Rentabilidad: number;
    Stock: number;
    StockMinimo: number;
    Observaciones: string;
    Estado: string;
    IdRubro: string;

    constructor(nombre: string, Tipo: string, Codigo: string, CodigoOem: string, CostoInterno: number, CodigoBarras: string, Descripcion: string, Precio: number, Iva: number, Rentabilidad: number, Stock: number, StockMinimo: number, Observaciones: string, Estado: string, IdRubro: string) {
        this.nombre = nombre;
        this.Tipo = Tipo;
        this.Codigo = Codigo;
        this.CodigoOem = CodigoOem;
        this.CostoInterno = CostoInterno;
        this.CodigoBarras = CodigoBarras;
        this.Descripcion = Descripcion;
        this.Precio = Precio;
        this.Iva = Iva;
        this.Rentabilidad = Rentabilidad;
        this.Stock = Stock;
        this.StockMinimo = StockMinimo;
        this.Observaciones = Observaciones;
        this.Estado = Estado;
        this.IdRubro = IdRubro;
        }
}
