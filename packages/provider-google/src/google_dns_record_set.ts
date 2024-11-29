import { TerraformConfig, TerraformResource } from "tfs";
export interface InternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface HealthCheckedTargets {
  internal_load_balancers: InternalLoadBalancers;
}
export interface Geo {
  location: string;
  rrdatas?: string[];
  health_checked_targets: HealthCheckedTargets;
}
export interface InternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface HealthCheckedTargets {
  internal_load_balancers: InternalLoadBalancers;
}
export interface BackupGeo {
  location: string;
  rrdatas?: string[];
  health_checked_targets: HealthCheckedTargets;
}
export interface InternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface Primary {
  internal_load_balancers: InternalLoadBalancers;
}
export interface PrimaryBackup {
  enable_geo_fencing_for_backups?: boolean;
  trickle_ratio?: number;
  backup_geo: BackupGeo;
  primary: Primary;
}
export interface InternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface HealthCheckedTargets {
  internal_load_balancers: InternalLoadBalancers;
}
export interface Wrr {
  rrdatas?: string[];
  weight: number;
  health_checked_targets: HealthCheckedTargets;
}
export interface RoutingPolicy {
  enable_geo_fencing?: boolean;
  geo: Geo;
  primary_backup: PrimaryBackup;
  wrr: Wrr;
}
export interface GoogleDnsRecordSetArgs {
  managed_zone: string;
  name: string;
  rrdatas?: string[];
  ttl?: number;
  type: string;
  routing_policy: RoutingPolicy;
}
export class google_dns_record_set extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsRecordSetArgs) {
    super(config, "resource", args, resourceName, "google_dns_record_set");
  }
}