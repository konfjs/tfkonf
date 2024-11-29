import { TerraformConfig, TerraformResource } from "tfs";
export interface AuditLogs {
  enable: boolean;
}
export interface Kubernetes {
  audit_logs: AuditLogs;
}
export interface EbsVolumes {
  auto_enable: boolean;
}
export interface ScanEc2InstanceWithFindings {
  ebs_volumes: EbsVolumes;
}
export interface MalwareProtection {
  scan_ec2_instance_with_findings: ScanEc2InstanceWithFindings;
}
export interface S3Logs {
  auto_enable: boolean;
}
export interface Datasources {
  kubernetes: Kubernetes;
  malware_protection: MalwareProtection;
  s3_logs: S3Logs;
}
export interface AwsGuarddutyOrganizationConfigurationArgs {
  detector_id: string;
  datasources: Datasources;
}
export class aws_guardduty_organization_configuration extends TerraformResource {
  readonly auto_enable?: boolean;
  readonly auto_enable_organization_members?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyOrganizationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_organization_configuration");
  }
}