#! /bin/bash

echo "==== START ===="

sudo yum -y update
sudo yum -y install postgresql-server
sudo amazon-linux-extras
sudo amazon-linux-extras install -y postgresql14

echo "==== POSTGRESQL INSTALLED ===="

echo "==== POSTGRESQL DB INIT ===="
sudo postgresql-setup --initdb --unit postgresql

echo "==== POSTGRESQL DB START ===="
sudo systemctl start postgresql

echo "==== POSTGRESQL DB ENABLED ===="
sudo systemctl enable postgresql

echo "==== POSTGRESQL PG_HBA CHANGED ===="
sudo cp /var/lib/pgsql/data/pg_hba.conf /var/lib/pgsql/data/pg_hba.conf.org


sudo cat << EOM >> /var/lib/pgsql/data/pg_hba.conf
local   all             all                                     trust
host    all             all             127.0.0.1/32            trust
host    all             all             ::1/128                 ident
local   replication     all                                     peer
host    replication     all             127.0.0.1/32            ident
host    replication     all             ::1/128                 ident
EOM

echo "==== POSTGRESQL DB RESTARTED ===="
sudo systemctl restart postgresql

echo "==== COMPLETED ===="
