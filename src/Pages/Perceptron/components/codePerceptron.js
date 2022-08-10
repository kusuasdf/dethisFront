const codePerceptron =
    "try:\n" +
    '\tprint("Cargando modelo...")\n' +
    "\tX_train, X_test, y_train, y_test = get_train_test()\n" +
    '\tprint("Modelo cargado")\n' +
    "\tX_train = X_train.reshape(X_train.shape[0], 20, 1000)\n" +
    "\tX_test = X_test.reshape(X_test.shape[0], 20, 1000)\n" +
    "\ty_train_hot = to_categorical(y_train)\n" +
    "\ty_test_hot = to_categorical(y_test)\n" +
    "\t\n" +
    "\tmodel = Sequential()\n" +
    "\t\n" +
    "\tmodel.add(Flatten())\n" +
    "\tmodel.add(Dense(50, ))\n" +
    "\tmodel.add(Dropout(0.2))\n" +
    "\tmodel.add(Dense(500, ))\n" +
    "\tmodel.add(Dropout(0.6))\n" +
    "\tmodel.add(Dense(1000,))\n" +
    "\tmodel.add(Dropout(0.1))\n" +
    "\tmodel.add(Dense(11, activation='softmax',))\n" +
    "\t\n" +
    "\tmodel.compile(optimizer=Adam(learning_rate=0.001),loss='BinaryCrossentropy', metrics=['accuracy'])\n" +
    "\t\n" +
    "\tmodel.fit(X_train, y_train_hot, epochs=100, shuffle=False, validation_data=(X_test, y_test_hot), batch_size=128, verbose=1, callbacks=[WandbCallback()])\n" +
    "\t\n" +
    "except Exception as e:\n" +
    '\tprint("Error al cargar el modelo")\n' +
    "\tprint(e)";

export default codePerceptron;
