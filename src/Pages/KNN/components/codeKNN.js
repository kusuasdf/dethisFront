const codeKNN =
    "try:\n" +
    "\tX_train, X_test, y_train, y_test=get_train_test()\n" +
    "\tX_train=X_train.reshape(X_train.shape[0], -1)\n" +
    "\tX_test=X_test.reshape(X_test.shape[0], -1)\n" +
    "\tneighbors = np.arange(1, 20)\n" +
    "\ttrain_accuracy = np.empty(len(neighbors))\n" +
    "\ttest_accuracy = np.empty(len(neighbors))\n" +
    "\t\n" +
    "\tfor i, k in enumerate(neighbors):\n" +
    "\t\tknn = KNeighborsClassifier(n_neighbors=k)\n" +
    "\t\tknn.fit(X_train, y_train)\n" +
    "\t\tprint('Numero de vecinos',i+1)\n" +
    "\t\ttrain_accuracy[i] = knn.score(X_train, y_train)\n" +
    "\t\tprint('Train accuracy: ', train_accuracy[i])\n" +
    "\t\ttest_accuracy[i] = knn.score(X_test, y_test)\n" +
    "\t\tprint('Test accuracy: ', test_accuracy[i])\n" +
    "\n" +
    "\tbest_index=np.argmax(test_accuracy)\n" +
    "\tprint('Best index: ', best_index)\n" +
    "\tprint('Best accuarcy: ', test_accuracy[best_index])\n" +
    "\twandb.finish(exit_code=0)\n" +
    "except Exception as e:\n" +
    "\twandb.finish(exit_code=1)\n" +
    "\tprint(e)\n";

export default codeKNN;
