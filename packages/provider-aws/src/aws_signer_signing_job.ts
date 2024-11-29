import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSignerSigningJobArgsDestinationS3 {
  bucket: string;
  prefix?: string;
}
export interface AwsSignerSigningJobArgsDestination {
  s3: AwsSignerSigningJobArgsDestinationS3;
}
export interface AwsSignerSigningJobArgsSourceS3 {
  bucket: string;
  key: string;
  version: string;
}
export interface AwsSignerSigningJobArgsSource {
  s3: AwsSignerSigningJobArgsSourceS3;
}
export interface AwsSignerSigningJobArgs {
  ignore_signing_job_failure?: boolean;
  profile_name: string;
  destination: AwsSignerSigningJobArgsDestination;
  source: AwsSignerSigningJobArgsSource;
}
export class aws_signer_signing_job extends TerraformResource {
  readonly completed_at!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly job_id!: string;
  readonly job_invoker!: string;
  readonly job_owner!: string;
  readonly platform_display_name!: string;
  readonly platform_id!: string;
  readonly profile_version!: string;
  readonly requested_by!: string;
  readonly revocation_record!: any[];
  readonly signature_expires_at!: string;
  readonly signed_object!: any[];
  readonly status!: string;
  readonly status_reason!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSignerSigningJobArgs) {
    super(config, "resource", args, resourceName, "aws_signer_signing_job");
  }
}