import 'package:flutter/material.dart';

class ProductForm extends StatefulWidget {
  @override
  _ProductFormState createState() => _ProductFormState();
}

class _ProductFormState extends State<ProductForm> {
  final _formKey = GlobalKey<FormState>();
  List<Map<String, dynamic>> _products = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Product Form'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Form(
            key: _formKey,
            child: Column(
              children: [
                Expanded(
                  child: ListView.builder(
                    itemCount: _products.length + 1,
                    itemBuilder: (context, index) {
                      if (index == _products.length) {
                        return ElevatedButton(
                          onPressed: () {
                            if (_formKey.currentState!.validate()) {
                              setState(() {
                                _products.add({
                                  'name': null,
                                  'quantity': null,
                                  'cost': null,
                                  'totalCost': null,
                                });
                              });
                            }
                          },
                          child: Text('Add Product'),
                        );
                      }
                      return Padding(
                        padding: const EdgeInsets.symmetric(vertical: 8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Product ${index + 1}'),
                            TextFormField(
                              validator: (value) {
                                if (value!.isEmpty) {
                                  return 'Please enter a product name';
                                }
                                return null;
                              },
                              decoration: InputDecoration(
                                labelText: 'Product Name',
                              ),
                              initialValue: _products[index]['name'],
                              onSaved: (value) {
                                setState(() {
                                  _products[index]['name'] = value;
                                });
                              },
                            ),
                            TextFormField(
                              validator: (value) {
                                if (value!.isEmpty) {
                                  return 'Please enter a quantity';
                                }
                                if (int.tryParse(value) == null) {
                                  return 'Please enter a valid number';
                                }
                                return null;
                              },
                              decoration: const InputDecoration(
                                  labelText: 'Quantity',
                                  border: OutlineInputBorder()),
                              keyboardType: TextInputType.number,
                              initialValue:
                                  _products[index]['quantity']?.toString(),
                              onSaved: (value) {
                                setState(() {
                                  _products[index]['quantity'] =
                                      int.tryParse(value!);
                                  _products[index]['totalCost'] =
                                      _products[index]['cost'] *
                                          _products[index]['quantity'];
                                });
                              },
                            ),
                            TextFormField(
                              validator: (value) {
                                if (value!.isEmpty) {
                                  return 'Please enter a cost';
                                }
                                if (double.tryParse(value) == null) {
                                  return 'Please enter a valid number';
                                }
                                return null;
                              },
                              decoration: const InputDecoration(
                                labelText: 'Cost',
                              ),
                              keyboardType: TextInputType.number,
                              initialValue:
                                  _products[index]['cost']?.toString(),
                              onSaved: (value) {
                                setState(() {
                                  _products[index]['cost'] =
                                      double.tryParse(value!);
                                  _products[index]['totalCost'] =
                                      _products[index]['cost'] *
                                          _products[index]['quantity'];
                                });
                              },
                            ),
                            Text(
                              'Total Cost: ${_products[index]['totalCost']}',
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      _formKey.currentState?.save();
                      print(_products);
                    }
                  },
                  child: Text('Save'),
                ),
              ],
            ),
          ),
        ));
  }
}
