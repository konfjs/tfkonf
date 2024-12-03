import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyGeo {
  location: string;
  rrdatas?: string[];
  health_checked_targets: GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargets;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeo {
  location: string;
  rrdatas?: string[];
  health_checked_targets: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimary {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackup {
  enable_geo_fencing_for_backups?: boolean;
  trickle_ratio?: number;
  backup_geo: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeo;
  primary: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimary;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyWrr {
  rrdatas?: string[];
  weight: number;
  health_checked_targets: GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargets;
}
export interface GoogleDnsRecordSetArgsRoutingPolicy {
  enable_geo_fencing?: boolean;
  geo: GoogleDnsRecordSetArgsRoutingPolicyGeo;
  primary_backup: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackup;
  wrr: GoogleDnsRecordSetArgsRoutingPolicyWrr;
}
export interface GoogleDnsRecordSetArgs {
  managed_zone: string;
  name: string;
  rrdatas?: string[];
  ttl?: number;
  type: string;
  routing_policy: GoogleDnsRecordSetArgsRoutingPolicy;
}
export class google_dns_record_set extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsRecordSetArgs) {
    super(config, "resource", args, resourceName, "google_dns_record_set");
  }
}