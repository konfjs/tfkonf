import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
  bucket?: string;
  key?: string;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetailsDestinationFileLocation {
  efs_file_location: AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
  s3_file_location: AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  destination_file_location: AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetailsDestinationFileLocation;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsCustomStepDetails {
  name?: string;
  source_file_location?: string;
  target?: string;
  timeout_seconds?: number;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
  bucket?: string;
  key?: string;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetailsDestinationFileLocation {
  efs_file_location: AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
  s3_file_location: AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  type: string;
  destination_file_location: AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsDeleteStepDetails {
  name?: string;
  source_file_location?: string;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsTagStepDetailstags {
  key: string;
  value: string;
}
export interface AwsTransferWorkflowArgsOnExceptionStepsTagStepDetails {
  name?: string;
  source_file_location?: string;
  tags: AwsTransferWorkflowArgsOnExceptionStepsTagStepDetailstags;
}
export interface AwsTransferWorkflowArgsOnExceptionSteps {
  type: string;
  copy_step_details: AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetails;
  custom_step_details: AwsTransferWorkflowArgsOnExceptionStepsCustomStepDetails;
  decrypt_step_details: AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetails;
  delete_step_details: AwsTransferWorkflowArgsOnExceptionStepsDeleteStepDetails;
  tag_step_details: AwsTransferWorkflowArgsOnExceptionStepsTagStepDetails;
}
export interface AwsTransferWorkflowArgsstepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface AwsTransferWorkflowArgsstepsCopyStepDetailsDestinationFileLocationS3FileLocation {
  bucket?: string;
  key?: string;
}
export interface AwsTransferWorkflowArgsstepsCopyStepDetailsDestinationFileLocation {
  efs_file_location: AwsTransferWorkflowArgsstepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
  s3_file_location: AwsTransferWorkflowArgsstepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}
export interface AwsTransferWorkflowArgsstepsCopyStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  destination_file_location: AwsTransferWorkflowArgsstepsCopyStepDetailsDestinationFileLocation;
}
export interface AwsTransferWorkflowArgsstepsCustomStepDetails {
  name?: string;
  source_file_location?: string;
  target?: string;
  timeout_seconds?: number;
}
export interface AwsTransferWorkflowArgsstepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  file_system_id?: string;
  path?: string;
}
export interface AwsTransferWorkflowArgsstepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
  bucket?: string;
  key?: string;
}
export interface AwsTransferWorkflowArgsstepsDecryptStepDetailsDestinationFileLocation {
  efs_file_location: AwsTransferWorkflowArgsstepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
  s3_file_location: AwsTransferWorkflowArgsstepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}
export interface AwsTransferWorkflowArgsstepsDecryptStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  type: string;
  destination_file_location: AwsTransferWorkflowArgsstepsDecryptStepDetailsDestinationFileLocation;
}
export interface AwsTransferWorkflowArgsstepsDeleteStepDetails {
  name?: string;
  source_file_location?: string;
}
export interface AwsTransferWorkflowArgsstepsTagStepDetailstags {
  key: string;
  value: string;
}
export interface AwsTransferWorkflowArgsstepsTagStepDetails {
  name?: string;
  source_file_location?: string;
  tags: AwsTransferWorkflowArgsstepsTagStepDetailstags;
}
export interface AwsTransferWorkflowArgssteps {
  type: string;
  copy_step_details: AwsTransferWorkflowArgsstepsCopyStepDetails;
  custom_step_details: AwsTransferWorkflowArgsstepsCustomStepDetails;
  decrypt_step_details: AwsTransferWorkflowArgsstepsDecryptStepDetails;
  delete_step_details: AwsTransferWorkflowArgsstepsDeleteStepDetails;
  tag_step_details: AwsTransferWorkflowArgsstepsTagStepDetails;
}
export interface AwsTransferWorkflowArgs {
  description?: string;
  tags?: {
    [key: string]: string;
  };
  on_exception_steps: AwsTransferWorkflowArgsOnExceptionSteps;
  steps: AwsTransferWorkflowArgssteps;
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