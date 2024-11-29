import { TerraformConfig, TerraformResource } from "tfs";
export interface AuditLogs {
  enable: boolean;
}
export interface Kubernetes {
  audit_logs: AuditLogs;
}
export interface EbsVolumes {
  enable: boolean;
}
export interface ScanEc2InstanceWithFindings {
  ebs_volumes: EbsVolumes;
}
export interface MalwareProtection {
  scan_ec2_instance_with_findings: ScanEc2InstanceWithFindings;
}
export interface S3Logs {
  enable: boolean;
}
export interface Datasources {
  kubernetes: Kubernetes;
  malware_protection: MalwareProtection;
  s3_logs: S3Logs;
}
export interface AwsGuarddutyDetectorArgs {
  enable?: boolean;
  tags?: {
    [key: string]: string;
  };
  datasources: Datasources;
}
export class aws_guardduty_detector extends TerraformResource {
  readonly account_id!: string;
  readonly arn!: string;
  readonly finding_publishing_frequency?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyDetectorArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_detector");
  }
}