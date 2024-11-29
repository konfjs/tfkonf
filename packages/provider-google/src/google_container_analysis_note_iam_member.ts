import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleContainerAnalysisNoteIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleContainerAnalysisNoteIamMemberArgs {
  member: string;
  note: string;
  role: string;
  condition: GoogleContainerAnalysisNoteIamMemberArgsCondition;
}
export class google_container_analysis_note_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisNoteIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_container_analysis_note_iam_member");
  }
}