export class ProducStel {
    reference: string;
    name: string;
    barcode: string;
    description: string;
    privateComments: string;
    salesCountableAccount: string;
    purchaseCountableAccount: string;
    marginEnabled: boolean;
    promotional: boolean;
    inactive: boolean;
    stockEnabled: boolean;
    externalId: string;
    location: string;
    primaryTaxId: number;
    salesMarginPercentage: number;
    discountPercentage: number;
    serialNumberId: number;
    primaryTaxPercentage: number;
    realStock: number;
    minimumStock: number;
    productCategoryId: number;
    salesPrice: number;
    salesMinimumPrice: number;
    purchasePrice: number;
    purchaseMarginPercentage: number;

constructor(reference: string, name: string, barcode: string, description: string, privateComments: string, salesCountableAccount: string, purchaseCountableAccount: string, marginEnabled: boolean, promotional: boolean, inactive: boolean, stockEnabled: boolean, externalId: string, location: string, primaryTaxId: number, salesMarginPercentage: number, discountPercentage: number, serialNumberId: number, primaryTaxPercentage: number, realStock: number, minimumStock: number, productCategoryId: number, salesPrice: number, salesMinimumPrice: number, purchasePrice: number, purchaseMarginPercentage: number) {

    this.reference = reference;
    this.name = name;
    this.barcode = barcode;
    this.description = description;
    this.privateComments = privateComments;
    this.salesCountableAccount = salesCountableAccount;
    this.purchaseCountableAccount = purchaseCountableAccount;
    this.marginEnabled = marginEnabled;
    this.promotional = promotional;
    this.inactive = inactive;
    this.stockEnabled = stockEnabled;
    this.externalId = externalId;
    this.location = location;
    this.primaryTaxId = primaryTaxId;
    this.salesCountableAccount = salesCountableAccount;
    this.salesMarginPercentage = salesMarginPercentage;
    this.discountPercentage = discountPercentage;
    this.serialNumberId = serialNumberId;    
    this.primaryTaxPercentage = primaryTaxPercentage;
    this.realStock = realStock;
    this.minimumStock = minimumStock;
    this.productCategoryId = productCategoryId; 
    this.salesPrice = salesPrice;
    this.salesMinimumPrice = salesMinimumPrice;
    this.purchasePrice = purchasePrice;
    this.purchaseMarginPercentage = purchaseMarginPercentage; 
    }
}