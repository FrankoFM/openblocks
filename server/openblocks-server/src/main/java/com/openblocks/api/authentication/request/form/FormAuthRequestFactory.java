package com.openblocks.api.authentication.request.form;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.openblocks.api.authentication.request.AuthRequest;
import com.openblocks.api.authentication.request.AuthRequestContext;
import com.openblocks.api.authentication.request.AuthRequestFactory;
import com.openblocks.sdk.auth.AuthTypeConstants;

import reactor.core.publisher.Mono;

@Component
public class FormAuthRequestFactory implements AuthRequestFactory {

    @Autowired
    private FormAuthRequest formAuthRequest;

    @Override
    public Mono<AuthRequest> build(AuthRequestContext context) {
        return Mono.just(formAuthRequest);
    }

    @Override
    public Set<String> supportedAuthTypes() {
        return Set.of(AuthTypeConstants.FORM);
    }
}
