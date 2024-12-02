#! /bin/bash

echo "==== START ===="

psql -U postgres -c "DROP DATABASE IF EXISTS nextjs_level7_chapter01"
psql -U postgres -c "CREATE DATABASE nextjs_level7_chapter01 WITH ENCODING='UTF8' LC_COLLATE='ja_JP.utf8' LC_CTYPE='ja_JP.utf8' TEMPLATE=template0"

echo "==== nextjs_level7_chapter01 ===="
echo "==== DATABASE CREATED ===="

echo "==== COMPLETED ===="
