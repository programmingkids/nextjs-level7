#! /bin/bash

echo "==== START ===="

mysql -u root -e "DROP DATABASE IF EXISTS nextjs_level7_chapter01"
mysql -u root -e "CREATE DATABASE nextjs_level7_chapter01 DEFAULT CHARACTER SET utf8"

echo "==== nextjs_level7_chapter01 ===="
echo "==== DATABASE CREATED ===="

echo "==== COMPLETED ===="


