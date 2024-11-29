import { TerraformConfig, TerraformResource } from "tfs";
export interface DataBoostIsolationReadOnly {
  compute_billing_owner: string;
}
export interface SingleClusterRouting {
  allow_transactional_writes?: boolean;
  cluster_id: string;
}
export interface StandardIsolation {
  priority: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigtableAppProfileArgs {
  app_profile_id: string;
  description?: string;
  ignore_warnings?: boolean;
  instance?: string;
  multi_cluster_routing_cluster_ids?: string[];
  multi_cluster_routing_use_any?: boolean;
  data_boost_isolation_read_only: DataBoostIsolationReadOnly;
  single_cluster_routing: SingleClusterRouting;
  standard_isolation: StandardIsolation;
  timeouts: Timeouts;
}
export class google_bigtable_app_profile extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableAppProfileArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_app_profile");
  }
}