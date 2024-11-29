import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDnsRecordSetArgsRoutingPolicygeoHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface GoogleDnsRecordSetArgsRoutingPolicygeoHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicygeoHealthCheckedTargetsInternalLoadBalancers;
}
export interface GoogleDnsRecordSetArgsRoutingPolicygeo {
  location: string;
  rrdatas?: string[];
  health_checked_targets: GoogleDnsRecordSetArgsRoutingPolicygeoHealthCheckedTargets;
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
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupprimaryInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupprimary {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupprimaryInternalLoadBalancers;
}
export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackup {
  enable_geo_fencing_for_backups?: boolean;
  trickle_ratio?: number;
  backup_geo: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeo;
  primary: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupprimary;
}
export interface GoogleDnsRecordSetArgsRoutingPolicywrrHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}
export interface GoogleDnsRecordSetArgsRoutingPolicywrrHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicywrrHealthCheckedTargetsInternalLoadBalancers;
}
export interface GoogleDnsRecordSetArgsRoutingPolicywrr {
  rrdatas?: string[];
  weight: number;
  health_checked_targets: GoogleDnsRecordSetArgsRoutingPolicywrrHealthCheckedTargets;
}
export interface GoogleDnsRecordSetArgsRoutingPolicy {
  enable_geo_fencing?: boolean;
  geo: GoogleDnsRecordSetArgsRoutingPolicygeo;
  primary_backup: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackup;
  wrr: GoogleDnsRecordSetArgsRoutingPolicywrr;
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