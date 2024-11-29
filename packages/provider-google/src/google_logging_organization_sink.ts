import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingOrganizationSinkArgsBigqueryOptions {
  use_partitioned_tables: boolean;
}
export interface GoogleLoggingOrganizationSinkArgsExclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}
export interface GoogleLoggingOrganizationSinkArgs {
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  include_children?: boolean;
  intercept_children?: boolean;
  name: string;
  org_id: string;
  bigquery_options: GoogleLoggingOrganizationSinkArgsBigqueryOptions;
  exclusions: GoogleLoggingOrganizationSinkArgsExclusions;
}
export class google_logging_organization_sink extends TerraformResource {
  readonly id?: string;
  readonly writer_identity!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingOrganizationSinkArgs) {
    super(config, "resource", args, resourceName, "google_logging_organization_sink");
  }
}