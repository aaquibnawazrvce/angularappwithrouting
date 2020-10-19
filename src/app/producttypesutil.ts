export class Producttypesutil {


    productTypeList = [
    {
      id: 1,
      name: 'Pipes',
      description: 'This is Pipes'
    },
    {
      id: 2,
      name: 'Marble',
      description : 'Used for Marbles'
    },
    {
      id: 3,
      name: 'Cement',
      description : 'Used for Cement'
    }
  ];
 getProductTypes(): any[] {
    return this.productTypeList;
 }
 getSpecificProductType(id: number): any{
  return this.productTypeList[id];
 }

}
