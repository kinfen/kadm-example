#/bin/bash



FOLDERS="
kadm-plugin-cms
kadm-plugin-wxapp/server
kadm-plugin-wx
kadm-plugin-mall
"
CURRENT_PATH=$(pwd)


echo "build kadm"
npm link $CURRENT_PATH/../kadm --registry http://www.kstudio.top:7001

echo "build plugins"
cd $CURRENT_PATH
for folder in $FOLDERS; do
    echo "readey to link $CURRENT_PATH/../$folder"
    npm link $CURRENT_PATH/../$folder --registry http://www.kstudio.top:7001
done



echo "build  kadm-core and fields"
cd $CURRENT_PATH/../kadm
npm link ../kadm-core --registry http://www.kstudio.top:7001
npm link ../kadm-fields --registry http://www.kstudio.top:7001


cd $CURRENT_PATH
npm link @kstudio/kadm-fields

for folder in $FOLDERS; do
    cd $CURRENT_PATH/../$folder
    npm link @kstudio/kadm-fields
    npm link @kstudio/kadm
done


echo "link kadm-core in fields"
cd $CURRENT_PATH/../kadm-fields
npm i --registry http://www.kstudio.top:7001
npm link @kstudio/kadm-core

echo "link kadm-fields in core"
cd $CURRENT_PATH/../kadm-core
npm i --registry http://www.kstudio.top:7001
npm link @kstudio/kadm-fields







