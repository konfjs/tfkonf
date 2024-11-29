import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGuarddutyOrganizationConfigurationArgsdatasourceskubernetesAuditLogs {
  enable: boolean;
}
export interface AwsGuarddutyOrganizationConfigurationArgsdatasourceskubernetes {
  audit_logs: AwsGuarddutyOrganizationConfigurationArgsdatasourceskubernetesAuditLogs;
}
export interface AwsGuarddutyOrganizationConfigurationArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
  auto_enable: boolean;
}
export interface AwsGuarddutyOrganizationConfigurationArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindings {
  ebs_volumes: AwsGuarddutyOrganizationConfigurationArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}
export interface AwsGuarddutyOrganizationConfigurationArgsdatasourcesMalwareProtection {
  scan_ec2_instance_with_findings: AwsGuarddutyOrganizationConfigurationArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}
export interface AwsGuarddutyOrganizationConfigurationArgsdatasourcesS3Logs {
  auto_enable: boolean;
}
export interface AwsGuarddutyOrganizationConfigurationArgsdatasources {
  kubernetes: AwsGuarddutyOrganizationConfigurationArgsdatasourceskubernetes;
  malware_protection: AwsGuarddutyOrganizationConfigurationArgsdatasourcesMalwareProtection;
  s3_logs: AwsGuarddutyOrganizationConfigurationArgsdatasourcesS3Logs;
}
export interface AwsGuarddutyOrganizationConfigurationArgs {
  detector_id: string;
  datasources: AwsGuarddutyOrganizationConfigurationArgsdatasources;
}
export class aws_guardduty_organization_configuration extends TerraformResource {
  readonly auto_enable?: boolean;
  readonly auto_enable_organization_members?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyOrganizationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_organization_configuration");
  }
}