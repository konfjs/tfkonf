import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetesAuditLogs {
  enable: boolean;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetes {
  audit_logs: AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetesAuditLogs;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
  auto_enable: boolean;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
  ebs_volumes: AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtection {
  scan_ec2_instance_with_findings: AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesS3Logs {
  auto_enable: boolean;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasources {
  kubernetes: AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetes;
  malware_protection: AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtection;
  s3_logs: AwsGuarddutyOrganizationConfigurationArgsDatasourcesS3Logs;
}

export interface AwsGuarddutyOrganizationConfigurationArgs {
  detector_id: string;
  datasources: AwsGuarddutyOrganizationConfigurationArgsDatasources;
}

export class aws_guardduty_organization_configuration extends TerraformResource {
  readonly auto_enable?: boolean;
  readonly auto_enable_organization_members?: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyOrganizationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_organization_configuration");
  }
}
