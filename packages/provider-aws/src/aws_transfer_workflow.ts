import { TerraformConfig, TerraformResource } from "@tfkonf/core";

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

export interface AwsTransferWorkflowArgsOnExceptionStepsTagStepDetailsTags {
  key: string;
  value: string;
}

export interface AwsTransferWorkflowArgsOnExceptionStepsTagStepDetails {
  name?: string;
  source_file_location?: string;
  tags: AwsTransferWorkflowArgsOnExceptionStepsTagStepDetailsTags;
}

export interface AwsTransferWorkflowArgsOnExceptionSteps {
  type: string;
  copy_step_details: AwsTransferWorkflowArgsOnExceptionStepsCopyStepDetails;
  custom_step_details: AwsTransferWorkflowArgsOnExceptionStepsCustomStepDetails;
  decrypt_step_details: AwsTransferWorkflowArgsOnExceptionStepsDecryptStepDetails;
  delete_step_details: AwsTransferWorkflowArgsOnExceptionStepsDeleteStepDetails;
  tag_step_details: AwsTransferWorkflowArgsOnExceptionStepsTagStepDetails;
}

export interface AwsTransferWorkflowArgsStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
  file_system_id?: string;
  path?: string;
}

export interface AwsTransferWorkflowArgsStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
  bucket?: string;
  key?: string;
}

export interface AwsTransferWorkflowArgsStepsCopyStepDetailsDestinationFileLocation {
  efs_file_location: AwsTransferWorkflowArgsStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
  s3_file_location: AwsTransferWorkflowArgsStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}

export interface AwsTransferWorkflowArgsStepsCopyStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  destination_file_location: AwsTransferWorkflowArgsStepsCopyStepDetailsDestinationFileLocation;
}

export interface AwsTransferWorkflowArgsStepsCustomStepDetails {
  name?: string;
  source_file_location?: string;
  target?: string;
  timeout_seconds?: number;
}

export interface AwsTransferWorkflowArgsStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  file_system_id?: string;
  path?: string;
}

export interface AwsTransferWorkflowArgsStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
  bucket?: string;
  key?: string;
}

export interface AwsTransferWorkflowArgsStepsDecryptStepDetailsDestinationFileLocation {
  efs_file_location: AwsTransferWorkflowArgsStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
  s3_file_location: AwsTransferWorkflowArgsStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}

export interface AwsTransferWorkflowArgsStepsDecryptStepDetails {
  name?: string;
  overwrite_existing?: string;
  source_file_location?: string;
  type: string;
  destination_file_location: AwsTransferWorkflowArgsStepsDecryptStepDetailsDestinationFileLocation;
}

export interface AwsTransferWorkflowArgsStepsDeleteStepDetails {
  name?: string;
  source_file_location?: string;
}

export interface AwsTransferWorkflowArgsStepsTagStepDetailsTags {
  key: string;
  value: string;
}

export interface AwsTransferWorkflowArgsStepsTagStepDetails {
  name?: string;
  source_file_location?: string;
  tags: AwsTransferWorkflowArgsStepsTagStepDetailsTags;
}

export interface AwsTransferWorkflowArgsSteps {
  type: string;
  copy_step_details: AwsTransferWorkflowArgsStepsCopyStepDetails;
  custom_step_details: AwsTransferWorkflowArgsStepsCustomStepDetails;
  decrypt_step_details: AwsTransferWorkflowArgsStepsDecryptStepDetails;
  delete_step_details: AwsTransferWorkflowArgsStepsDeleteStepDetails;
  tag_step_details: AwsTransferWorkflowArgsStepsTagStepDetails;
}

export interface AwsTransferWorkflowArgs {
  description?: string;
  tags?: { [key: string]: string };
  on_exception_steps: AwsTransferWorkflowArgsOnExceptionSteps;
  steps: AwsTransferWorkflowArgsSteps;
}

export class aws_transfer_workflow extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferWorkflowArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_workflow");
  }
}
