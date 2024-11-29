import { TerraformConfig, TerraformResource } from "tfs";
export interface EfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface S3FileLocation {
  bucket?: string;
  key?: string;
}
export interface DestinationFileLocation {
  efs_file_location: EfsFileLocation;
  s3_file_location: S3FileLocation;
}
export interface CopyStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  destination_file_location: DestinationFileLocation;
}
export interface CustomStepDetails {
  name?: string;
  source_file_location?: string;
  target?: string;
  timeout_seconds?: number;
}
export interface EfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface S3FileLocation {
  bucket?: string;
  key?: string;
}
export interface DestinationFileLocation {
  efs_file_location: EfsFileLocation;
  s3_file_location: S3FileLocation;
}
export interface DecryptStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  type: string;
  destination_file_location: DestinationFileLocation;
}
export interface DeleteStepDetails {
  name?: string;
  source_file_location?: string;
}
export interface Tags {
  key: string;
  value: string;
}
export interface TagStepDetails {
  name?: string;
  source_file_location?: string;
  tags: Tags;
}
export interface OnExceptionSteps {
  type: string;
  copy_step_details: CopyStepDetails;
  custom_step_details: CustomStepDetails;
  decrypt_step_details: DecryptStepDetails;
  delete_step_details: DeleteStepDetails;
  tag_step_details: TagStepDetails;
}
export interface EfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface S3FileLocation {
  bucket?: string;
  key?: string;
}
export interface DestinationFileLocation {
  efs_file_location: EfsFileLocation;
  s3_file_location: S3FileLocation;
}
export interface CopyStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  destination_file_location: DestinationFileLocation;
}
export interface CustomStepDetails {
  name?: string;
  source_file_location?: string;
  target?: string;
  timeout_seconds?: number;
}
export interface EfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface S3FileLocation {
  bucket?: string;
  key?: string;
}
export interface DestinationFileLocation {
  efs_file_location: EfsFileLocation;
  s3_file_location: S3FileLocation;
}
export interface DecryptStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  type: string;
  destination_file_location: DestinationFileLocation;
}
export interface DeleteStepDetails {
  name?: string;
  source_file_location?: string;
}
export interface Tags {
  key: string;
  value: string;
}
export interface TagStepDetails {
  name?: string;
  source_file_location?: string;
  tags: Tags;
}
export interface Steps {
  type: string;
  copy_step_details: CopyStepDetails;
  custom_step_details: CustomStepDetails;
  decrypt_step_details: DecryptStepDetails;
  delete_step_details: DeleteStepDetails;
  tag_step_details: TagStepDetails;
}
export interface AwsTransferWorkflowArgs {
  description?: string;
  tags?: {
    [key: string]: string;
  };
  on_exception_steps: OnExceptionSteps;
  steps: Steps;
}
export class aws_transfer_workflow extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferWorkflowArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_workflow");
  }
}