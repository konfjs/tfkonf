import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigtableGcPolicyArgsMaxAge {}
export interface GoogleBigtableGcPolicyArgsMaxVersion {
  number: number;
}
export interface GoogleBigtableGcPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleBigtableGcPolicyArgs {
  column_family: string;
  deletion_policy?: string;
  gc_rules?: string;
  ignore_warnings?: boolean;
  instance_name: string;
  mode?: string;
  table: string;
  max_age: GoogleBigtableGcPolicyArgsMaxAge;
  max_version: GoogleBigtableGcPolicyArgsMaxVersion;
  timeouts: GoogleBigtableGcPolicyArgsTimeouts;
}
export class google_bigtable_gc_policy extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableGcPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_gc_policy");
  }
}