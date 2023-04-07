import 'package:chamunda_invoice/invoice_pdf.dart';
import 'package:chamunda_invoice/model/invoice.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:chamunda_invoice/page/pdf_page.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  static final String title = 'Invoice';

  @override
  Widget build(BuildContext context) => MaterialApp(
        debugShowCheckedModeBanner: false,
        title: title,
        theme: ThemeData(primarySwatch: Colors.deepOrange),
        home: InvoiceForm(),
      );
}

class InvoiceForm extends StatefulWidget {
  const InvoiceForm({Key? key}) : super(key: key);

  @override
  _InvoiceFormState createState() => _InvoiceFormState();
}

class _InvoiceFormState extends State<InvoiceForm> {
  final _formKey = GlobalKey<FormState>();

  final _productNameController = TextEditingController();
  final _quantityController = TextEditingController();
  final _priceController = TextEditingController();
  final _hsnController = TextEditingController();
  final _gstController = TextEditingController();
  List<Map<String, dynamic>> _products = [];

  void _addProduct() {
    final productName = _productNameController.text;
    final quantity = int.parse(_quantityController.text);
    final price = double.parse(_priceController.text);
    final hsncode = _hsnController.text;

    int gst = int.parse(_gstController.text);
    final totalPrice = price * quantity;
    final totalWithGST = (totalPrice * (gst / 100));

    setState(() {
      _products.add({
        'productName': productName,
        'quantity': quantity,
        'price': price,
        'hsnCode': hsncode,
        'gst': gst,
        'totalWithGst': totalWithGST,
      });

      _productNameController.clear();
      _quantityController.clear();
      _priceController.clear();
      _hsnController.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Chamunda Elec'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextFormField(
                controller: _productNameController,
                decoration: const InputDecoration(
                  labelText: 'Product Name',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.blue,
                      width: 2.0,
                      style: BorderStyle.solid,
                    ),
                  ),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter product name';
                  }
                  return null;
                },
              ),
              const SizedBox(
                height: 20,
              ),
              TextFormField(
                controller: _quantityController,
                decoration: const InputDecoration(
                  labelText: 'Quantity',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.blue,
                      width: 2.0,
                      style: BorderStyle.solid,
                    ),
                  ),
                ),
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter quantity';
                  }
                  final quantity = int.tryParse(value);
                  if (quantity == null || quantity <= 0) {
                    return 'Please enter valid quantity';
                  }
                  return null;
                },
              ),
              const SizedBox(
                height: 20,
              ),
              TextFormField(
                controller: _hsnController,
                decoration: const InputDecoration(
                  labelText: 'HSN code',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.blue,
                      width: 2.0,
                      style: BorderStyle.solid,
                    ),
                  ),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter hsn';
                  }

                  return null;
                },
              ),
              const SizedBox(
                height: 20,
              ),
              TextFormField(
                controller: _gstController,
                decoration: const InputDecoration(
                  labelText: 'GST',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.blue,
                      width: 2.0,
                      style: BorderStyle.solid,
                    ),
                  ),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter GST percent';
                  }

                  return null;
                },
              ),
              const SizedBox(
                height: 20,
              ),
              TextFormField(
                controller: _priceController,
                decoration: const InputDecoration(
                  labelText: 'Price',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.blue,
                      width: 2.0,
                      style: BorderStyle.solid,
                    ),
                  ),
                ),
                keyboardType: TextInputType.numberWithOptions(decimal: true),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter price';
                  }
                  final price = double.tryParse(value);
                  if (price == null || price <= 0) {
                    return 'Please enter valid price';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        _addProduct();
                      }
                    },
                    child: const Text('Add'),
                  ),
                  if (_products.isNotEmpty)
                    ElevatedButton(
                      onPressed: () {
                        final invoiceItems = _products
                            .map((product) => InvoiceItem(
                                  description: product['productName'],
                                  hsncode: product['hsnCode'],
                                  date: DateTime.now(),
                                  quantity: product['quantity'],
                                  gst: product['gst'],
                                  unitPrice: product['price'],
                                  totalWithGst: product['totalWithGst'],
                                ))
                            .toList();

                        Navigator.push(context,
                            MaterialPageRoute(builder: (context) {
                          return PdfPage(
                            invoiceItems: invoiceItems,
                          );
                        }));
                      },
                      child: const Text("generate invoice"),
                    ),
                ],
              ),
              const SizedBox(height: 16),
              Text(
                'Products:',
                style: Theme.of(context).textTheme.subtitle1,
              ),
              const SizedBox(height: 8),
              Expanded(
                child: ListView.builder(
                  itemCount: _products.length,
                  itemBuilder: (context, index) {
                    final product = _products[index];
                    return Column(
                      children: [
                        ListTile(
                          title: Text(product['productName']),
                          subtitle: Text(
                              'Qty: ${product['quantity']}, Price: ${product['price']}, TotalWithGST: ${product['totalWithGst']}'),
                        ),
                      ],
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
