import 'package:flutter/material.dart';
import 'package:chamunda_invoice/api/pdf_api.dart';
import 'package:chamunda_invoice/api/pdf_invoice_api.dart';
import 'package:chamunda_invoice/main.dart';
import 'package:chamunda_invoice/model/customer.dart';
import 'package:chamunda_invoice/model/invoice.dart';
import 'package:chamunda_invoice/model/supplier.dart';
import 'package:chamunda_invoice/widget/button_widget.dart';
import 'package:chamunda_invoice/widget/title_widget.dart';
import 'package:uuid/uuid.dart';

class PdfPage extends StatefulWidget {
  final List<InvoiceItem> invoiceItems;
  PdfPage({super.key, required this.invoiceItems});

  @override
  _PdfPageState createState() => _PdfPageState();
}

class _PdfPageState extends State<PdfPage> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _numContoller = TextEditingController();
  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: Text(MyApp.title),
          centerTitle: true,
        ),
        body: Container(
          padding: const EdgeInsets.all(32),
          child: Center(
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  TextFormField(
                    controller: _nameController,
                    decoration: const InputDecoration(
                      labelText: 'Customer Name',
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
                        return 'Please enter Coustomer name';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    controller: _numContoller,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(
                      labelText: 'Mobile Number',
                      border: OutlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.red,
                          width: 2.0,
                          style: BorderStyle.solid,
                        ),
                      ),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter Mobile number';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 48),
                  ButtonWidget(
                    text: 'Invoice PDF',
                    onClicked: () async {
                      final date = DateTime.now();
                      final dueDate = date.add(const Duration(days: 7));
                      var uuid = const Uuid();
                      try {
                        if (_formKey.currentState!.validate()) {
                          final invoice = Invoice(
                            supplier: const Supplier(
                              name: 'Shree Chamunda Electricals',
                              address: 'Ahemdabad,India',
                              paymentInfo: '',
                            ),
                            customer: Customer(
                              name: _nameController.text,
                              address: _numContoller.text,
                            ),
                            info: InvoiceInfo(
                              date: date,
                              dueDate: dueDate,
                              description:
                                  'Thanks For Buying These Product!! visit Again',
                              number: uuid.v4(),
                            ),
                            items: widget.invoiceItems,
                          );

                          final pdfFile = await PdfInvoiceApi.generate(invoice);

                          PdfApi.openFile(pdfFile);
                        }
                      } catch (e) {
                        print("somtin went wron");
                      }
                    },
                  ),
                ],
              ),
            ),
          ),
        ),
      );
}
