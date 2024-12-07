import { TerraformConfig } from '@tfkonf/core';
import { google_service_account } from '@tfkonf/provider-google/google_service_account';
import { google_service_account_iam_member } from '@tfkonf/provider-google/google_service_account_iam_member';
import { beforeEach, describe, expect, it } from 'vitest';

describe('TerraformConfig', () => {
    let m: TerraformConfig;

    beforeEach(() => {
        m = new TerraformConfig('foo.tf');
    });

    it('should reference service_account_id correctly', () => {
        const sa = new google_service_account(m, 'my-service-account', {
            account_id: 'foo',
            timeouts: {
                create: '10m',
            },
        });

        new google_service_account_iam_member(m, 'my-iam-member', {
            service_account_id: sa.account_id,
            role: 'roles/iam.Admin',
            member: 'group:foo@bar.com',
        });

        expect(sa.account_id).toBe('google_service_account.my-service-account.account_id');
    });
});
