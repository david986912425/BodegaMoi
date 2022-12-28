<template>
  <v-app>
    <v-card
    class="mx-auto my-5"
    width="90%"
    height="90vh"
    >
      <v-card-text>
        <v-table height="75vh">
        <thead>
          <tr>
            <th class="text-left">
              Producto
            </th>
            <th class="text-left">
              Seccion
            </th>
            <th class="text-left">
              Mes
            </th>
            <th class="text-left">
              Marca
            </th>
            <th class="text-left">
              Cliente
            </th>
            <th class="text-left">
              Cantidad
            </th>
            <th class="text-left">
              Precio Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in entry"
            :key="item"
          >
            <td>{{ item.Producto}}</td>
            <td>{{ item.Seccion}}</td>
            <td>{{ item.Mes}}</td>
            <td>{{ item.Marca}}</td>
            <td>{{ item.Cliente}}</td>
            <td>{{ item.Cantidad}}</td>
            <td>{{ item.PrecioTotal}}</td>
          </tr>
        </tbody>
      </v-table>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          icon
          color="primary"
          @click="dialog = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn icon @click="descargarExcel">
          <label for="file" class="nav-link"><v-icon>mdi-file-excel</v-icon></label>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="dialog"
      width="500px"
    >
      <v-card>
        <v-card-text>
          <v-text-field v-model="producto" label="Producto" variant="outlined"></v-text-field>
          <v-text-field v-model="seccion" label="Seccion" variant="outlined"></v-text-field>
          <v-text-field v-model="mes" label="Mes de Venta" variant="outlined"></v-text-field>
          <v-text-field v-model="marca" label="Marca" variant="outlined"></v-text-field>
          <v-text-field v-model="cliente" label="Cliente" variant="outlined"></v-text-field>
          <v-text-field v-model="precio" label="PRECIO X/U" variant="outlined" type="number"></v-text-field>
          <v-text-field v-model="cantidad" label="Cantidad" variant="outlined" type="number"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="AgregarProducto"
          >
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-app>
</template>

<script>
import app from "@/firebase/firebase"
import readExcel from "read-excel-file"
import exportFromJSON from "export-from-json"
let db = app.firestore();
console.log(db);

export default {
  name: 'App',
  data: () => ({
    entry : [],
    producto:'',
    seccion: '',
    mes:'',
    marca:'',
    cliente:'',
    precio:0,
    cantidad:0,
    precioTotal:0,
    dialog: false,
  }),
  mounted(){
    //git initthis.getProducts()
  },
  methods: {
    descargarExcel(){
      const data = this.entry;
      const fileName = 'download'
      const exportType = 'xls'
      exportFromJSON({data,fileName,exportType})
    },
    async getProducts(){
      try {
        let query = db.collection("products");
        const querySnapshot = await query.get();
        let docs = querySnapshot.docs;
    
        const response = docs.map((doc) => ({
          
          Producto: doc.data().Producto,
          Seccion: doc.data().Seccion,
          Mes: doc.data().Mes,
          Marca: doc.data().Marca,
          Cliente: doc.data().Cliente,
          Precio: doc.data().Precio,
          Cantidad: doc.data().Cantidad,
          PrecioTotal: doc.data().PrecioTotal,
        }));
        this.entry = response
        console.log(this.entry)
      } catch (error) {
        console.log(error)
      }
    },
    AgregarProducto(){
      let precioTotal = this.cantidad*this.precio
      console.log(precioTotal)
      let data = {Producto: this.producto, Seccion: this.seccion, Mes: this.mes, Marca: this.marca, Cliente: this.cliente, Precio: parseFloat(this.precio), Cantidad: parseInt(this.cantidad), PrecioTotal: precioTotal}
      console.log(data)
      try {
        db.collection('products')
        .doc()
        .set(data)
        console.log('Agregado producto');
        
      } catch (error) {
        console.log(error)
      }
    },
    async importarExcel(){
      const input = document.getElementById("file");
            readExcel(input.files[0]).then((rows) => {
            for (var i = 0; i < rows.length; i++){
              let row = rows[i]
              let data = {Producto: row[0], Seccion: row[1], Mes: row[2], Marca: row[3], Cliente: row[4], Precio: row[5], Cantidad: row[6], PrecioTotal: row[7]}
              console.log(data)
              try {
                db.collection('products')
                .doc()
                .set(data)
                console.log(data);
                
              } catch (error) {
                console.log(error)
              }
              

            }
            
            //websitesRef.push(rows);
            
            })
    }
  }
}
</script>
<style scoped>
.btnAgregar{
  display: flex;
  float: right;
}
</style>
