#! /bin/bash

echo "==== START ===="

mysql -u root -e "DROP DATABASE IF EXISTS nextjs_level7_chapter02"
mysql -u root -e "CREATE DATABASE nextjs_level7_chapter02 DEFAULT character SET utf8"

echo "==== nextjs_level7_chapter02 ===="
echo "==== DATABASE CREATED ===="

cp ./.env_sample ./.env
echo "==== ENV CREATED ===="

npx prisma migrate dev --name init
echo "==== DATABASE MIGRATED ===="

npx prisma db seed
echo "==== DATABASE INITIALIZED ===="

echo "==== COMPLETED ===="
