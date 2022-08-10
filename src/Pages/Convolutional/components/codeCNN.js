const codeCNN =
    "try:\n" +
    "\tX_train, X_test, y_train, y_test = get_train_test(\n" +
    "\t    split_ratio=0.7, random_state=42)\n" +
    "\tX_train = X_train.reshape(X_train.shape[0], 20, 1000, 1)\n" +
    "\tX_test = X_test.reshape(X_test.shape[0], 20, 1000, 1)\n" +
    "\ty_train_hot = to_categorical(y_train)\n" +
    "\ty_test_hot = to_categorical(y_test)\n" +
    "\tmodel = Sequential()\n" +
    "\tmodel.add(Conv2D(122, kernel_size=(3, 3), input_shape=(\n" +
    "\t    20, 1000, 1), strides=2,    padding='same',    activation='relu',))\n" +
    "\tmodel.add(BatchNormalization())\n" +
    "\tmodel.add(Conv2D(300, kernel_size=(3, 3),strides=2,    padding='same',    activation='relu'))\n" +
    "\tmodel.add(Dropout(0.5))\n" +
    "\tmodel.add(Conv2D(122, kernel_size=(3, 3),strides=2,    padding='same',    activation='relu',))\n" +
    "\tmodel.add(BatchNormalization())\n" +
    "\tmodel.add(Conv2D(300, kernel_size=(3, 3),strides=2,    padding='same',    activation='relu'))\n" +
    "\tmodel.add(MaxPooling2D(pool_size=(2, 2)))\n" +
    "\tmodel.add(Dropout(0.5))\n" +
    "\tmodel.add(Flatten())\n" +
    "\tmodel.add(Dense(150))\n" +
    "\tmodel.add(Dropout(0.5))\n" +
    "\tmodel.add(Dense(11, activation='softmax'))\n" +
    "\t\n" +
    "\tmodel.compile(optimizer=Adam(learning_rate=0.00001),\n" +
    "\t              loss='categorical_crossentropy', metrics=['accuracy'])\n" +
    "\t\n" +
    "\tmodel.fit(X_train, y_train_hot, epochs=1000, validation_data=(X_test, y_test_hot),\n" +
    "\t          shuffle=True, batch_size=32, verbose=1, callbacks=[WandbCallback()])\n" +
    "\twandb.finish(exit_code=0)\n" +
    "except Exception as e:\n" +
    "\twandb.finish(exit_code=1)\n" +
    "\tprint(e)\n";

export default codeCNN;
