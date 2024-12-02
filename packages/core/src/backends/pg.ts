export type PgBackend = {
    /**
     * Postgres connection string; a `postgres://` URL. The `PG_CONN_STR` and
     * {@link https://www.postgresql.org/docs/current/libpq-envars.html standard libpq}
     * environment variables can also be used to indicate how to connect to the PostgreSQL database.
     */
    conn_str: string;
    /**
     * Name of the automatically-managed Postgres schema.
     * Can also be set using the `PG_SCHEMA_NAME` environment variable.
     * @default "terraform_remote_state"
     */
    schema_name?: string;
    /**
     * If set to `true`, the Postgres schema must already exist.
     * Can also be set using the `PG_SKIP_SCHEMA_CREATION` environment variable.
     * Terraform won't try to create the schema, this is useful when it has already
     * been created by a database administrator.
     */
    skip_schema_creation?: boolean;
    /**
     *  If set to `true`, the Postgres table must already exist.
     * Can also be set using the `PG_SKIP_TABLE_CREATION` environment variable.
     * Terraform won't try to create the table, this is useful when it has already
     * been created by a database administrator.
     */
    skip_table_creation?: boolean;
    /**
     * If set to `true`, the Postgres index must already exist.
     * Can also be set using the `PG_SKIP_INDEX_CREATION` environment variable.
     * Terraform won't try to create the index, this is useful when it has already
     * been created by a database administrator.
     */
    skip_index_creation?: boolean;
};
