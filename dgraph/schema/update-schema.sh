#!/bin/sh
curl -X POST localhost:8080/admin/schema --data-binary "@schema.gql"
